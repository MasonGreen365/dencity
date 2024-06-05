import json

def is_valid_value(value):
    """Check if the value is valid (not null, 'n/a', 'null', 'undefined')."""
    return value is not None and value.lower() not in {'n/a', 'null', 'undefined'}

def remove_invalid_values_and_limit(input_geojson, output_geojson, columns, max_entries=5000):
    with open(input_geojson, 'r') as file:
        data = json.load(file)
    
    # Filter out features with invalid values in specified columns
    filtered_features = []
    for feature in data['features']:
        properties = feature['properties']
        if all(is_valid_value(properties.get(column)) for column in columns) and properties.get('YR_BUILT') != '0':
            filtered_features.append(feature)
    
    # Limit to set number of entries for efficency
    limited_features = filtered_features[:max_entries]
    
    data['features'] = limited_features
    
    # Write to new file
    with open(output_geojson, 'w') as file:
        json.dump(data, file, indent=4)
    
    print(f"Cleaned and limited GeoJSON file written to {output_geojson}")

# input and output file paths & columns to validate
input_geojson = 'Zoned_Development_Capacity_Layers_2016.geojson'
output_geojson = 'Cleaned_Parcel_Map.geojson'
columns = ['ADDRESS', 'PROP_NAME', 'YR_BUILT']

# call function to clean and limit data
remove_invalid_values_and_limit(input_geojson, output_geojson, columns)
