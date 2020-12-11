/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RclRecurringTransactionStatusEnum } from './RclRecurringTransactionStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Status.
   * @nullable
   */
  status?: RclRecurringTransactionStatusEnum;
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
export class RclRecurringTransactionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RclRecurringTransaction> {
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
   * Representation of the [[RclRecurringTransaction.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
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

  /**
   * Creates an instance of RclRecurringTransactionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RclRecurringTransaction);
  }
}

export namespace RclRecurringTransaction {
  /**
   * Metadata information on all properties of the `RclRecurringTransaction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RclRecurringTransaction>[] = [{
    originalName: 'TransactionID',
    name: 'transactionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TemplateID',
    name: 'templateId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Instance',
    name: 'instance',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PlannedDate',
    name: 'plannedDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RclRecurringTransaction {
    return deserializeComplexTypeV4(json, RclRecurringTransaction);
  }
}
