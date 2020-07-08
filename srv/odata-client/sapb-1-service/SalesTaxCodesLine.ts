/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesTaxCodesLine
 */
export interface SalesTaxCodesLine {
  /**
   * Sta Tax On Tax Type.
   * @nullable
   */
  staTaxOnTaxType?: number;
  /**
   * Sta Taxon Tax Code.
   * @nullable
   */
  staTaxonTaxCode?: string;
  /**
   * Stc Code.
   * @nullable
   */
  stcCode?: string;
  /**
   * Sta Type.
   * @nullable
   */
  staType?: number;
  /**
   * Sta Code.
   * @nullable
   */
  staCode?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Effective Rate.
   * @nullable
   */
  effectiveRate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesTaxCodesLine.build]] instead.
 */
export function createSalesTaxCodesLine(json: any): SalesTaxCodesLine {
  return SalesTaxCodesLine.build(json);
}

/**
 * SalesTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxCodesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesTaxCodesLine.staTaxOnTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staTaxOnTaxType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('STATaxOnTaxType', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesTaxCodesLine.staTaxonTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staTaxonTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('STATaxonTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[SalesTaxCodesLine.stcCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stcCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('STCCode', this, 'Edm.String');
  /**
   * Representation of the [[SalesTaxCodesLine.staType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('STAType', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesTaxCodesLine.staCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  staCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('STACode', this, 'Edm.String');
  /**
   * Representation of the [[SalesTaxCodesLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesTaxCodesLine.effectiveRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EffectiveRate', this, 'Edm.Double');
}

export namespace SalesTaxCodesLine {
  export function build(json: { [keys: string]: FieldType }): SalesTaxCodesLine {
    return createComplexType(json, {
      STATaxOnTaxType: (staTaxOnTaxType: number) => ({ staTaxOnTaxType: edmToTs(staTaxOnTaxType, 'Edm.Int32') }),
      STATaxonTaxCode: (staTaxonTaxCode: string) => ({ staTaxonTaxCode: edmToTs(staTaxonTaxCode, 'Edm.String') }),
      STCCode: (stcCode: string) => ({ stcCode: edmToTs(stcCode, 'Edm.String') }),
      STAType: (staType: number) => ({ staType: edmToTs(staType, 'Edm.Int32') }),
      STACode: (staCode: string) => ({ staCode: edmToTs(staCode, 'Edm.String') }),
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      EffectiveRate: (effectiveRate: number) => ({ effectiveRate: edmToTs(effectiveRate, 'Edm.Double') })
    });
  }
}
