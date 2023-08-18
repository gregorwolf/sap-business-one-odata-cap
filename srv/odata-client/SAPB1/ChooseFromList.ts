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
import { ChooseFromListLine } from './ChooseFromListLine';
import type { ChooseFromListApi } from './ChooseFromListApi';

/**
 * This class represents the entity "ChooseFromList" of service "SAPB1".
 */
export class ChooseFromList<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChooseFromListType<T>
{
  /**
   * Technical entity name for ChooseFromList.
   */
  static _entityName = 'ChooseFromList';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ChooseFromList entity
   */
  static _keys = ['ObjectName'];
  /**
   * Object Name.
   */
  objectName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Choose From List Lines.
   * @nullable
   */
  chooseFromListLines?: ChooseFromListLine<T>[] | null;

  constructor(readonly _entityApi: ChooseFromListApi<T>) {
    super(_entityApi);
  }
}

export interface ChooseFromListType<
  T extends DeSerializers = DefaultDeSerializers
> {
  objectName: DeserializedType<T, 'Edm.String'>;
  chooseFromListLines?: ChooseFromListLine<T>[] | null;
}
