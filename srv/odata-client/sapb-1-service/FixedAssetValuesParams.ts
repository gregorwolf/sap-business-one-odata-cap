/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class FixedAssetValuesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace FixedAssetValuesParams {
  export function build(json: { [keys: string]: FieldType }): FixedAssetValuesParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      FiscalYear: (fiscalYear: string) => ({ fiscalYear: edmToTs(fiscalYear, 'Edm.String') }),
      DepreciationArea: (depreciationArea: string) => ({ depreciationArea: edmToTs(depreciationArea, 'Edm.String') })
    });
  }
}
