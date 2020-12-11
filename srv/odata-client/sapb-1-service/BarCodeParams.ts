/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BarCodeParams
 */
export interface BarCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Barcode.
   * @nullable
   */
  barcode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BarCodeParams.build]] instead.
 */
export function createBarCodeParams(json: any): BarCodeParams {
  return BarCodeParams.build(json);
}

/**
 * BarCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BarCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BarCodeParams> {
  /**
   * Representation of the [[BarCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BarCodeParams.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[BarCodeParams.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BarCodeParams.barcode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barcode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Barcode', this, 'Edm.String');

  /**
   * Creates an instance of BarCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BarCodeParams);
  }
}

export namespace BarCodeParams {
  /**
   * Metadata information on all properties of the `BarCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BarCodeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Barcode',
    name: 'barcode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BarCodeParams {
    return deserializeComplexTypeV4(json, BarCodeParams);
  }
}
