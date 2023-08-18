/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RclRecurringTransactionStatusEnum } from './RclRecurringTransactionStatusEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * RclRecurringTransaction
 */
export interface RclRecurringTransaction<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transaction Id.
   * @nullable
   */
  transactionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Template Id.
   * @nullable
   */
  templateId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Instance.
   * @nullable
   */
  instance?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Planned Date.
   * @nullable
   */
  plannedDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * RclRecurringTransactionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringTransactionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RclRecurringTransaction,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RclRecurringTransaction.transactionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransactionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link RclRecurringTransaction.templateId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TemplateID', 'Edm.Int32', true);
  /**
   * Representation of the {@link RclRecurringTransaction.instance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Instance', 'Edm.Int32', true);
  /**
   * Representation of the {@link RclRecurringTransaction.plannedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link RclRecurringTransaction.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    RclRecurringTransactionStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    RclRecurringTransactionStatusEnum,
    true
  );
  /**
   * Representation of the {@link RclRecurringTransaction.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocType', 'Edm.String', true);
  /**
   * Representation of the {@link RclRecurringTransaction.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);

  /**
   * Creates an instance of RclRecurringTransactionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      RclRecurringTransaction,
      fieldOptions
    );
  }
}

export namespace RclRecurringTransaction {
  /**
   * Metadata information on all properties of the `RclRecurringTransaction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RclRecurringTransaction>[] =
    [
      {
        originalName: 'TransactionID',
        name: 'transactionId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TemplateID',
        name: 'templateId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Instance',
        name: 'instance',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PlannedDate',
        name: 'plannedDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Status',
        name: 'status',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'DocType',
        name: 'docType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
