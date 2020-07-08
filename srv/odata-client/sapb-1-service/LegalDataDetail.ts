/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * LegalDataDetail
 */
export interface LegalDataDetail {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Sequence.
   * @nullable
   */
  lineSequence?: number;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: string;
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: number;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LegalDataDetail.build]] instead.
 */
export function createLegalDataDetail(json: any): LegalDataDetail {
  return LegalDataDetail.build(json);
}

/**
 * LegalDataDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LegalDataDetailField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[LegalDataDetail.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LegalDataDetail.lineSequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineSequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineSequence', this, 'Edm.Int32');
  /**
   * Representation of the [[LegalDataDetail.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[LegalDataDetail.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxRate', this, 'Edm.Double');
  /**
   * Representation of the [[LegalDataDetail.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
}

export namespace LegalDataDetail {
  export function build(json: { [keys: string]: FieldType }): LegalDataDetail {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineSequence: (lineSequence: number) => ({ lineSequence: edmToTs(lineSequence, 'Edm.Int32') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      TaxRate: (taxRate: number) => ({ taxRate: edmToTs(taxRate, 'Edm.Double') }),
      Amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') })
    });
  }
}
