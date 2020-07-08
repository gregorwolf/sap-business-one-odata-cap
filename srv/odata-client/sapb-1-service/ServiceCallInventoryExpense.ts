/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallInventoryExpense
 */
export interface ServiceCallInventoryExpense {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Document Posting Date.
   * @nullable
   */
  documentPostingDate?: Moment;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallInventoryExpense.build]] instead.
 */
export function createServiceCallInventoryExpense(json: any): ServiceCallInventoryExpense {
  return ServiceCallInventoryExpense.build(json);
}

/**
 * ServiceCallInventoryExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallInventoryExpenseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallInventoryExpense.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallInventoryExpense.documentPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPostingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentPostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallInventoryExpense.documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallInventoryExpense.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
}

export namespace ServiceCallInventoryExpense {
  export function build(json: { [keys: string]: FieldType }): ServiceCallInventoryExpense {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      DocumentPostingDate: (documentPostingDate: Moment) => ({ documentPostingDate: edmToTs(documentPostingDate, 'Edm.DateTimeOffset') }),
      DocumentNumber: (documentNumber: number) => ({ documentNumber: edmToTs(documentNumber, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') })
    });
  }
}
