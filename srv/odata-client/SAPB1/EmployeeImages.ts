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
import type { EmployeeImagesApi } from './EmployeeImagesApi';

/**
 * This class represents the entity "EmployeeImages" of service "SAPB1".
 */
export class EmployeeImages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeImagesType<T>
{
  /**
   * Technical entity name for EmployeeImages.
   */
  static _entityName = 'EmployeeImages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeeImages entity
   */
  static _keys = ['EmployeeNo'];
  /**
   * Employee No.
   */
  employeeNo!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Picture.
   */
  picture!: DeserializedType<T, 'Edm.Int32'>;

  constructor(readonly _entityApi: EmployeeImagesApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeNo: DeserializedType<T, 'Edm.Int32'>;
  picture: DeserializedType<T, 'Edm.Int32'>;
}
