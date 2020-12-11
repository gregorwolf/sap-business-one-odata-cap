/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WarehouseSublevelCodeParams
 */
export interface WarehouseSublevelCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Warehouse Sublevel.
   * @nullable
   */
  warehouseSublevel?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WarehouseSublevelCodeParams.build]] instead.
 */
export function createWarehouseSublevelCodeParams(json: any): WarehouseSublevelCodeParams {
  return WarehouseSublevelCodeParams.build(json);
}

/**
 * WarehouseSublevelCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WarehouseSublevelCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WarehouseSublevelCodeParams> {
  /**
   * Representation of the [[WarehouseSublevelCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WarehouseSublevelCodeParams.warehouseSublevel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseSublevel: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WarehouseSublevel', this, 'Edm.Int32');
  /**
   * Representation of the [[WarehouseSublevelCodeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of WarehouseSublevelCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WarehouseSublevelCodeParams);
  }
}

export namespace WarehouseSublevelCodeParams {
  /**
   * Metadata information on all properties of the `WarehouseSublevelCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WarehouseSublevelCodeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WarehouseSublevel',
    name: 'warehouseSublevel',
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
  export function build(json: { [keys: string]: FieldType }): WarehouseSublevelCodeParams {
    return deserializeComplexTypeV4(json, WarehouseSublevelCodeParams);
  }
}
