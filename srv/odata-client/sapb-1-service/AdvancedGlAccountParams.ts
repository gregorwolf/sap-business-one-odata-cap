/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AdvancedGlAccountParams
 */
export interface AdvancedGlAccountParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: string;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: string;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: string;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: string;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Usage.
   * @nullable
   */
  usage?: number;
  /**
   * Udf 1.
   * @nullable
   */
  udf1?: string;
  /**
   * Udf 2.
   * @nullable
   */
  udf2?: string;
  /**
   * Udf 3.
   * @nullable
   */
  udf3?: string;
  /**
   * Udf 4.
   * @nullable
   */
  udf4?: string;
  /**
   * Udf 5.
   * @nullable
   */
  udf5?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountParams.build]] instead.
 */
export function createAdvancedGlAccountParams(json: any): AdvancedGlAccountParams {
  return AdvancedGlAccountParams.build(json);
}

/**
 * AdvancedGlAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AdvancedGlAccountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AdvancedGlAccountParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.shipToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCountry', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.shipToState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToState', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.vatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroup', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[AdvancedGlAccountParams.usage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Usage', this, 'Edm.Int32');
  /**
   * Representation of the [[AdvancedGlAccountParams.udf1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDF1', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.udf2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDF2', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.udf3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDF3', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.udf4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDF4', this, 'Edm.String');
  /**
   * Representation of the [[AdvancedGlAccountParams.udf5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udf5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDF5', this, 'Edm.String');
}

export namespace AdvancedGlAccountParams {
  export function build(json: { [keys: string]: FieldType }): AdvancedGlAccountParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      ShipToCountry: (shipToCountry: string) => ({ shipToCountry: edmToTs(shipToCountry, 'Edm.String') }),
      ShipToState: (shipToState: string) => ({ shipToState: edmToTs(shipToState, 'Edm.String') }),
      VatGroup: (vatGroup: string) => ({ vatGroup: edmToTs(vatGroup, 'Edm.String') }),
      PostingDate: (postingDate: Moment) => ({ postingDate: edmToTs(postingDate, 'Edm.DateTimeOffset') }),
      Usage: (usage: number) => ({ usage: edmToTs(usage, 'Edm.Int32') }),
      UDF1: (udf1: string) => ({ udf1: edmToTs(udf1, 'Edm.String') }),
      UDF2: (udf2: string) => ({ udf2: edmToTs(udf2, 'Edm.String') }),
      UDF3: (udf3: string) => ({ udf3: edmToTs(udf3, 'Edm.String') }),
      UDF4: (udf4: string) => ({ udf4: edmToTs(udf4, 'Edm.String') }),
      UDF5: (udf5: string) => ({ udf5: edmToTs(udf5, 'Edm.String') })
    });
  }
}
