/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { InventoryAccountTypeEnum } from './InventoryAccountTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Account Type.
   * @nullable
   */
  accountType?: InventoryAccountTypeEnum;
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
export class AdvancedGlAccountParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AdvancedGlAccountParams> {
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
   * Representation of the [[AdvancedGlAccountParams.accountType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AccountType', this);
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

  /**
   * Creates an instance of AdvancedGlAccountParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AdvancedGlAccountParams);
  }
}

export namespace AdvancedGlAccountParams {
  /**
   * Metadata information on all properties of the `AdvancedGlAccountParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AdvancedGlAccountParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FederalTaxID',
    name: 'federalTaxId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToCountry',
    name: 'shipToCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToState',
    name: 'shipToState',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VatGroup',
    name: 'vatGroup',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PostingDate',
    name: 'postingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'AccountType',
    name: 'accountType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Usage',
    name: 'usage',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UDF1',
    name: 'udf1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDF2',
    name: 'udf2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDF3',
    name: 'udf3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDF4',
    name: 'udf4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UDF5',
    name: 'udf5',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AdvancedGlAccountParams {
    return deserializeComplexTypeV4(json, AdvancedGlAccountParams);
  }
}
