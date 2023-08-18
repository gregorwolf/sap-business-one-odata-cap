/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InternalReconciliationOpenTransRow } from './InternalReconciliationOpenTransRow';
import { ElectronicProtocol } from './ElectronicProtocol';
import { CardOrAccountEnum } from './CardOrAccountEnum';
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
 * InternalReconciliationOpenTrans
 */
export interface InternalReconciliationOpenTrans<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Recon Date.
   * @nullable
   */
  reconDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Card Or Account.
   * @nullable
   */
  cardOrAccount?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bpl Id.
   * @nullable
   */
  bplId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Internal Reconciliation Open Trans Rows.
   * @nullable
   */
  internalReconciliationOpenTransRows?: DeserializedType<
    DeSerializersT,
    'SAPB1.InternalReconciliationOpenTransRow'
  >;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: DeserializedType<
    DeSerializersT,
    'SAPB1.ElectronicProtocol'
  >;
}

/**
 * InternalReconciliationOpenTransField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationOpenTransField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InternalReconciliationOpenTrans,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTrans.reconDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTrans.cardOrAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardOrAccount: EnumField<
    EntityT,
    DeSerializersT,
    CardOrAccountEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CardOrAccount',
    CardOrAccountEnum,
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTrans.bplId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLId', 'Edm.Int32', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTrans.internalReconciliationOpenTransRows} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalReconciliationOpenTransRows: CollectionField<
    EntityT,
    DeSerializersT,
    InternalReconciliationOpenTransRow,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InternalReconciliationOpenTransRows',
    InternalReconciliationOpenTransRow,
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTrans.electronicProtocols} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicProtocols: CollectionField<
    EntityT,
    DeSerializersT,
    ElectronicProtocol,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ElectronicProtocols',
    ElectronicProtocol,
    true
  );

  /**
   * Creates an instance of InternalReconciliationOpenTransField.
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
      InternalReconciliationOpenTrans,
      fieldOptions
    );
  }
}

export namespace InternalReconciliationOpenTrans {
  /**
   * Metadata information on all properties of the `InternalReconciliationOpenTrans` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTrans>[] =
    [
      {
        originalName: 'ReconDate',
        name: 'reconDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'CardOrAccount',
        name: 'cardOrAccount',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'BPLId',
        name: 'bplId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'InternalReconciliationOpenTransRows',
        name: 'internalReconciliationOpenTransRows',
        type: InternalReconciliationOpenTransRow,
        isCollection: true
      },
      {
        originalName: 'ElectronicProtocols',
        name: 'electronicProtocols',
        type: ElectronicProtocol,
        isCollection: true
      }
    ];
}
