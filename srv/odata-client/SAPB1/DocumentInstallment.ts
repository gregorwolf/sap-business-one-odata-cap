/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * DocumentInstallment
 */
export interface DocumentInstallment<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Percentage.
   * @nullable
   */
  percentage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Last Dunning Date.
   * @nullable
   */
  lastDunningDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Dunning Level.
   * @nullable
   */
  dunningLevel?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Ordered.
   * @nullable
   */
  paymentOrdered?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DocumentInstallmentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentInstallmentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentInstallment,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentInstallment.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DocumentInstallment.percentage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Percentage', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentInstallment.total} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentInstallment.lastDunningDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastDunningDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastDunningDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DocumentInstallment.dunningLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dunningLevel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DunningLevel', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentInstallment.totalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocumentInstallment.installmentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InstallmentId', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocumentInstallment.paymentOrdered} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentOrdered: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PaymentOrdered', BoYesNoEnum, true);

  /**
   * Creates an instance of DocumentInstallmentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DocumentInstallment, fieldOptions);
  }
}

export namespace DocumentInstallment {
  /**
   * Metadata information on all properties of the `DocumentInstallment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentInstallment>[] = [
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Percentage',
      name: 'percentage',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Total',
      name: 'total',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LastDunningDate',
      name: 'lastDunningDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DunningLevel',
      name: 'dunningLevel',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TotalFC',
      name: 'totalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InstallmentId',
      name: 'installmentId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PaymentOrdered',
      name: 'paymentOrdered',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
