from develocity.config import from_properties_file, in_gradle_user_home

def develocity_configuration(configuration):
    configuration.develocity_url = 'https://ge.solutions-team.gradle.com'
    configuration.access_key = from_properties_file(in_gradle_user_home())
    return configuration