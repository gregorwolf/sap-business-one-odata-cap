/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class SalesTaxCodesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxCodesLine> {
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

  /**
   * Creates an instance of SalesTaxCodesLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesTaxCodesLine);
  }
}

export namespace SalesTaxCodesLine {
  /**
   * Metadata information on all properties of the `SalesTaxCodesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesTaxCodesLine>[] = [{
    originalName: 'STATaxOnTaxType',
    name: 'staTaxOnTaxType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'STATaxonTaxCode',
    name: 'staTaxonTaxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'STCCode',
    name: 'stcCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'STAType',
    name: 'staType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'STACode',
    name: 'staCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EffectiveRate',
    name: 'effectiveRate',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesTaxCodesLine {
    return deserializeComplexTypeV4(json, SalesTaxCodesLine);
  }
}
