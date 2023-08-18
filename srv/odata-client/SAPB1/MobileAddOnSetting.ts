/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { MobileAddOnSettingApi } from './MobileAddOnSettingApi';
import { MobileAddonSettingTypeEnum } from './MobileAddonSettingTypeEnum';
import { ViewStyleTypeEnum } from './ViewStyleTypeEnum';
import { LogonMethodEnum } from './LogonMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "MobileAddOnSetting" of service "SAPB1".
 */
export class MobileAddOnSetting<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MobileAddOnSettingType<T>
{
  /**
   * Technical entity name for MobileAddOnSetting.
   */
  static _entityName = 'MobileAddOnSetting';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MobileAddOnSetting entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: MobileAddonSettingTypeEnum | null;
  /**
   * Provider.
   * @nullable
   */
  provider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * View Style.
   * @nullable
   */
  viewStyle?: ViewStyleTypeEnum | null;
  /**
   * Logon Method.
   * @nullable
   */
  logonMethod?: LogonMethodEnum | null;
  /**
   * Enable.
   * @nullable
   */
  enable?: BoYesNoEnum | null;
  /**
   * B 1 Mobile App.
   * @nullable
   */
  b1MobileApp?: BoYesNoEnum | null;
  /**
   * B 1 Sales App.
   * @nullable
   */
  b1SalesApp?: BoYesNoEnum | null;
  /**
   * B 1 Service App.
   * @nullable
   */
  b1ServiceApp?: BoYesNoEnum | null;

  constructor(readonly _entityApi: MobileAddOnSettingApi<T>) {
    super(_entityApi);
  }
}

export interface MobileAddOnSettingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  type?: MobileAddonSettingTypeEnum | null;
  provider?: DeserializedType<T, 'Edm.String'> | null;
  viewStyle?: ViewStyleTypeEnum | null;
  logonMethod?: LogonMethodEnum | null;
  enable?: BoYesNoEnum | null;
  b1MobileApp?: BoYesNoEnum | null;
  b1SalesApp?: BoYesNoEnum | null;
  b1ServiceApp?: BoYesNoEnum | null;
}
