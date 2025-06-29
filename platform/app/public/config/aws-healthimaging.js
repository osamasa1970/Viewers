window.config = {
  routerBasename: '/',
  extensions: [
    '@ohif/extension-default',
    '@ohif/extension-cornerstone',
    '@ohif/extension-measurement-tracking',
    '@ohif/extension-aws-healthimaging', 
  ],
  modes: ['@ohif/mode-longitudinal', '@ohif/mode-basic-viewer'],
  dataSources: [
    {
      namespace: '@ohif/extension-aws-healthimaging.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'AWS HealthImaging (Cognito Auth)',
        name: 'aws', 
        aws_region: 'us-east-1', 
        aws_cognito_identity_pool_id: 'us-east-1:381b581e-eba4-49a1-80d6-d8907b067c91',
        aws_user_pools_id: 'us-east-1_oL4WM1IL0',
        aws_user_pools_web_client_id: '3k3usjbkvoev8cl5mmimtp7aun',
        datastore_id: '2abef907f8ba47cb9811820b1ca79741', 
      },
    },
  ],
  showStudyList: true,
};
