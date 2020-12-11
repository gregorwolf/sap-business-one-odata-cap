/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UnitOfMeasurementGroupParams
 */
export interface UnitOfMeasurementGroupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UnitOfMeasurementGroupParams.build]] instead.
 */
export function createUnitOfMeasurementGroupParams(json: any): UnitOfMeasurementGroupParams {
  return UnitOfMeasurementGroupParams.build(json);
}

/**
 * UnitOfMeasurementGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UnitOfMeasurementGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UnitOfMeasurementGroupParams> {
  /**
   * Representation of the [[UnitOfMeasurementGroupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[UnitOfMeasurementGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of UnitOfMeasurementGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UnitOfMeasurementGroupParams);
  }
}

export namespace UnitOfMeasurementGroupParams {
  /**
   * Metadata information on all properties of the `UnitOfMeasurementGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UnitOfMeasurementGroupParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UnitOfMeasurementGroupParams {
    return deserializeComplexTypeV4(json, UnitOfMeasurementGroupParams);
  }
}
