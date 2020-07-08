/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class BpFiscalTaxIdField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[BpFiscalTaxId.taxId12]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId12: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId12', this, 'Edm.String');
  /**
   * Representation of the [[BpFiscalTaxId.taxId13]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId13: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId13', this, 'Edm.String');
}

export namespace BpFiscalTaxId {
  export function build(json: { [keys: string]: FieldType }): BpFiscalTaxId {
    return createComplexType(json, {
      Address: (address: string) => ({ address: edmToTs(address, 'Edm.String') }),
      CNAECode: (cnaeCode: number) => ({ cnaeCode: edmToTs(cnaeCode, 'Edm.Int32') }),
      TaxId0: (taxId0: string) => ({ taxId0: edmToTs(taxId0, 'Edm.String') }),
      TaxId1: (taxId1: string) => ({ taxId1: edmToTs(taxId1, 'Edm.String') }),
      TaxId2: (taxId2: string) => ({ taxId2: edmToTs(taxId2, 'Edm.String') }),
      TaxId3: (taxId3: string) => ({ taxId3: edmToTs(taxId3, 'Edm.String') }),
      TaxId4: (taxId4: string) => ({ taxId4: edmToTs(taxId4, 'Edm.String') }),
      TaxId5: (taxId5: string) => ({ taxId5: edmToTs(taxId5, 'Edm.String') }),
      TaxId6: (taxId6: string) => ({ taxId6: edmToTs(taxId6, 'Edm.String') }),
      TaxId7: (taxId7: string) => ({ taxId7: edmToTs(taxId7, 'Edm.String') }),
      TaxId8: (taxId8: string) => ({ taxId8: edmToTs(taxId8, 'Edm.String') }),
      TaxId9: (taxId9: string) => ({ taxId9: edmToTs(taxId9, 'Edm.String') }),
      TaxId10: (taxId10: string) => ({ taxId10: edmToTs(taxId10, 'Edm.String') }),
      TaxId11: (taxId11: string) => ({ taxId11: edmToTs(taxId11, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      TaxId12: (taxId12: string) => ({ taxId12: edmToTs(taxId12, 'Edm.String') }),
      TaxId13: (taxId13: string) => ({ taxId13: edmToTs(taxId13, 'Edm.String') })
    });
  }
}
