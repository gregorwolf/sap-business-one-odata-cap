/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FixedAssetValuesParams
 */
export interface FixedAssetValuesParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: string;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FixedAssetValuesParams.build]] instead.
 */
export function createFixedAssetValuesParams(json: any): FixedAssetValuesParams {
  return FixedAssetValuesParams.build(json);
}

/**
 * FixedAssetValuesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FixedAssetValuesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FixedAssetValuesParams> {
  /**
   * Representation of the [[FixedAssetValuesParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[FixedAssetValuesParams.fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalYear', this, 'Edm.String');
  /**
   * Representation of the [[FixedAssetValuesParams.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');

  /**
   * Creates an instance of FixedAssetValuesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FixedAssetValuesParams);
  }
}

export namespace FixedAssetValuesParams {
  /**
   * Metadata information on all properties of the `FixedAssetValuesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FixedAssetValuesParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FiscalYear',
    name: 'fiscalYear',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DepreciationArea',
    name: 'depreciationArea',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FixedAssetValuesParams {
    return deserializeComplexTypeV4(json, FixedAssetValuesParams);
  }
}
