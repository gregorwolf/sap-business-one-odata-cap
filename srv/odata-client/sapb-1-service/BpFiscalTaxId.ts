/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoAddressType } from './BoAddressType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpFiscalTaxId
 */
export interface BpFiscalTaxId {
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Cnae Code.
   * @nullable
   */
  cnaeCode?: number;
  /**
   * Tax Id 0.
   * @nullable
   */
  taxId0?: string;
  /**
   * Tax Id 1.
   * @nullable
   */
  taxId1?: string;
  /**
   * Tax Id 2.
   * @nullable
   */
  taxId2?: string;
  /**
   * Tax Id 3.
   * @nullable
   */
  taxId3?: string;
  /**
   * Tax Id 4.
   * @nullable
   */
  taxId4?: string;
  /**
   * Tax Id 5.
   * @nullable
   */
  taxId5?: string;
  /**
   * Tax Id 6.
   * @nullable
   */
  taxId6?: string;
  /**
   * Tax Id 7.
   * @nullable
   */
  taxId7?: string;
  /**
   * Tax Id 8.
   * @nullable
   */
  taxId8?: string;
  /**
   * Tax Id 9.
   * @nullable
   */
  taxId9?: string;
  /**
   * Tax Id 10.
   * @nullable
   */
  taxId10?: string;
  /**
   * Tax Id 11.
   * @nullable
   */
  taxId11?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Addr Type.
   * @nullable
   */
  addrType?: BoAddressType;
  /**
   * Tax Id 12.
   * @nullable
   */
  taxId12?: string;
  /**
   * Tax Id 13.
   * @nullable
   */
  taxId13?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpFiscalTaxId.build]] instead.
 */
export function createBpFiscalTaxId(json: any): BpFiscalTaxId {
  return BpFiscalTaxId.build(json);
}

/**
 * BpFiscalTaxIdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpFiscalTaxIdField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpFiscalTaxId> {
  /**
   * Representation of the [[BpFiscalTaxId.address]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Address', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.cnaeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cnaeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CNAECode', this, 'Edm.Int32');
  /**
   * Representation of the [[BpFiscalTaxId.taxId0]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId0: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId0', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId1', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId2', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId3', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId4', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId5', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId6]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId6: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId6', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId7]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId7: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId7', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId8]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId8: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId8', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId9]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId9: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId9', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId10]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId10: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId10', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId11]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId11: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId11', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.addrType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addrType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AddrType', this);
  /**
   * Representation of the [[BpFiscalTaxId.taxId12]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId12: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId12', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId13]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId13: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId13', this, 'Edm.String');

  /**
   * Creates an instance of BpFiscalTaxIdField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpFiscalTaxId);
  }
}

export namespace BpFiscalTaxId {
  /**
   * Metadata information on all properties of the `BpFiscalTaxId` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpFiscalTaxId>[] = [{
    originalName: 'Address',
    name: 'address',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CNAECode',
    name: 'cnaeCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaxId0',
    name: 'taxId0',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId1',
    name: 'taxId1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId2',
    name: 'taxId2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId3',
    name: 'taxId3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId4',
    name: 'taxId4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId5',
    name: 'taxId5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId6',
    name: 'taxId6',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId7',
    name: 'taxId7',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId8',
    name: 'taxId8',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId9',
    name: 'taxId9',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId10',
    name: 'taxId10',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId11',
    name: 'taxId11',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddrType',
    name: 'addrType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'TaxId12',
    name: 'taxId12',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId13',
    name: 'taxId13',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpFiscalTaxId {
    return deserializeComplexTypeV4(json, BpFiscalTaxId);
  }
}
