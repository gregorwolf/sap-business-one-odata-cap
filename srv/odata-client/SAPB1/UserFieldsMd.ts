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
import { ValidValueMd } from './ValidValueMd';
import type { UserFieldsMdApi } from './UserFieldsMdApi';
import { BoFieldTypes } from './BoFieldTypes';
import { BoFldSubTypes } from './BoFldSubTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UdfLinkedSystemObjectTypesEnum } from './UdfLinkedSystemObjectTypesEnum';
import { UserTablesMd, UserTablesMdType } from './UserTablesMd';

/**
 * This class represents the entity "UserFieldsMD" of service "SAPB1".
 */
export class UserFieldsMd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserFieldsMdType<T>
{
  /**
   * Technical entity name for UserFieldsMd.
   */
  static _entityName = 'UserFieldsMD';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserFieldsMd entity
   */
  static _keys = ['TableName', 'FieldID'];
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  type?: BoFieldTypes | null;
  /**
   * Size.
   * @nullable
   */
  size?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Type.
   * @nullable
   */
  subType?: BoFldSubTypes | null;
  /**
   * Linked Table.
   * @nullable
   */
  linkedTable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Value.
   * @nullable
   */
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table Name.
   */
  tableName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Id.
   */
  fieldId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Edit Size.
   * @nullable
   */
  editSize?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Mandatory.
   * @nullable
   */
  mandatory?: BoYesNoEnum | null;
  /**
   * Linked Udo.
   * @nullable
   */
  linkedUdo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked System Object.
   * @nullable
   */
  linkedSystemObject?: UdfLinkedSystemObjectTypesEnum | null;
  /**
   * Valid Values Md.
   * @nullable
   */
  validValuesMd?: ValidValueMd<T>[] | null;
  /**
   * One-to-one navigation property to the {@link UserTablesMd} entity.
   */
  userTablesMd?: UserTablesMd<T> | null;

  constructor(readonly _entityApi: UserFieldsMdApi<T>) {
    super(_entityApi);
  }
}

export interface UserFieldsMdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  type?: BoFieldTypes | null;
  size?: DeserializedType<T, 'Edm.Int32'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  subType?: BoFldSubTypes | null;
  linkedTable?: DeserializedType<T, 'Edm.String'> | null;
  defaultValue?: DeserializedType<T, 'Edm.String'> | null;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldId: DeserializedType<T, 'Edm.Int32'>;
  editSize?: DeserializedType<T, 'Edm.Int32'> | null;
  mandatory?: BoYesNoEnum | null;
  linkedUdo?: DeserializedType<T, 'Edm.String'> | null;
  linkedSystemObject?: UdfLinkedSystemObjectTypesEnum | null;
  validValuesMd?: ValidValueMd<T>[] | null;
  userTablesMd?: UserTablesMdType<T> | null;
}
