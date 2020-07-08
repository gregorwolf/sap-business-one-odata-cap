/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * RclRecurringTransaction
 */
export interface RclRecurringTransaction {
  /**
   * Transaction Id.
   * @nullable
   */
  transactionId?: number;
  /**
   * Template Id.
   * @nullable
   */
  templateId?: number;
  /**
   * Instance.
   * @nullable
   */
  instance?: number;
  /**
   * Planned Date.
   * @nullable
   */
  plannedDate?: Moment;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: string;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransaction.build]] instead.
 */
export function createRclRecurringTransaction(json: any): RclRecurringTransaction {
  return RclRecurringTransaction.build(json);
}

/**
 * RclRecurringTransactionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringTransactionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RclRecurringTransaction.transactionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionID', this, 'Edm.Int32');
  /**
   * Representation of the [[RclRecurringTransaction.templateId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TemplateID', this, 'Edm.Int32');
  /**
   * Representation of the [[RclRecurringTransaction.instance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Instance', this, 'Edm.Int32');
  /**
   * Representation of the [[RclRecurringTransaction.plannedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PlannedDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[RclRecurringTransaction.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocType', this, 'Edm.String');
  /**
   * Representation of the [[RclRecurringTransaction.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
}

export namespace RclRecurringTransaction {
  export function build(json: { [keys: string]: FieldType }): RclRecurringTransaction {
    return createComplexType(json, {
      TransactionID: (transactionId: number) => ({ transactionId: edmToTs(transactionId, 'Edm.Int32') }),
      TemplateID: (templateId: number) => ({ templateId: edmToTs(templateId, 'Edm.Int32') }),
      Instance: (instance: number) => ({ instance: edmToTs(instance, 'Edm.Int32') }),
      PlannedDate: (plannedDate: Moment) => ({ plannedDate: edmToTs(plannedDate, 'Edm.DateTimeOffset') }),
      DocType: (docType: string) => ({ docType: edmToTs(docType, 'Edm.String') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') })
    });
  }
}
