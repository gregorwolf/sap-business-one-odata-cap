/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlertManagementTypeEnum } from './AlertManagementTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AlertManagementParams
 */
export interface AlertManagementParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Type.
   * @nullable
   */
  type?: AlertManagementTypeEnum;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AlertManagementParams.build]] instead.
 */
export function createAlertManagementParams(json: any): AlertManagementParams {
  return AlertManagementParams.build(json);
}

/**
 * AlertManagementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlertManagementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlertManagementParams> {
  /**
   * Representation of the [[AlertManagementParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[AlertManagementParams.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[AlertManagementParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of AlertManagementParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AlertManagementParams);
  }
}

export namespace AlertManagementParams {
  /**
   * Metadata information on all properties of the `AlertManagementParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlertManagementParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AlertManagementParams {
    return deserializeComplexTypeV4(json, AlertManagementParams);
  }
}
