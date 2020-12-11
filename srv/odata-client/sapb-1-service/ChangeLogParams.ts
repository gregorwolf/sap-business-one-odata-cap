/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ChangeLogParams
 */
export interface ChangeLogParams {
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: number;
  /**
   * Updated Date.
   * @nullable
   */
  updatedDate?: Moment;
  /**
   * User Name.
   * @nullable
   */
  userName?: string;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ChangeLogParams.build]] instead.
 */
export function createChangeLogParams(json: any): ChangeLogParams {
  return ChangeLogParams.build(json);
}

/**
 * ChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChangeLogParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChangeLogParams> {
  /**
   * Representation of the [[ChangeLogParams.logInstance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogInstance', this, 'Edm.Int32');
  /**
   * Representation of the [[ChangeLogParams.updatedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updatedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('UpdatedDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ChangeLogParams.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserName', this, 'Edm.String');
  /**
   * Representation of the [[ChangeLogParams.objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectCode', this, 'Edm.String');

  /**
   * Creates an instance of ChangeLogParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ChangeLogParams);
  }
}

export namespace ChangeLogParams {
  /**
   * Metadata information on all properties of the `ChangeLogParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChangeLogParams>[] = [{
    originalName: 'LogInstance',
    name: 'logInstance',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UpdatedDate',
    name: 'updatedDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'UserName',
    name: 'userName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ObjectCode',
    name: 'objectCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ChangeLogParams {
    return deserializeComplexTypeV4(json, ChangeLogParams);
  }
}
