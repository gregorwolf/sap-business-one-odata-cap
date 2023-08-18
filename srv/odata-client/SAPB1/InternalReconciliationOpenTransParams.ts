/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InternalReconciliationBp } from './InternalReconciliationBp';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { ReconSelectDateTypeEnum } from './ReconSelectDateTypeEnum';
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
 * InternalReconciliationOpenTransParams
 */
export interface InternalReconciliationOpenTransParams<
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
   * Account No.
   * @nullable
   */
  accountNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date Type.
   * @nullable
   */
  dateType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Internal Reconciliation B Ps.
   * @nullable
   */
  internalReconciliationBPs?: DeserializedType<
    DeSerializersT,
    'SAPB1.InternalReconciliationBP'
  >;
}

/**
 * InternalReconciliationOpenTransParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationOpenTransParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InternalReconciliationOpenTransParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransParams.reconDate} property for query construction.
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
   * Representation of the {@link InternalReconciliationOpenTransParams.cardOrAccount} property for query construction.
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
   * Representation of the {@link InternalReconciliationOpenTransParams.accountNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountNo', 'Edm.String', true);
  /**
   * Representation of the {@link InternalReconciliationOpenTransParams.dateType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateType: EnumField<
    EntityT,
    DeSerializersT,
    ReconSelectDateTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DateType',
    ReconSelectDateTypeEnum,
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransParams.fromDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransParams.toDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InternalReconciliationOpenTransParams.internalReconciliationBPs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalReconciliationBPs: CollectionField<
    EntityT,
    DeSerializersT,
    InternalReconciliationBp,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InternalReconciliationBPs',
    InternalReconciliationBp,
    true
  );

  /**
   * Creates an instance of InternalReconciliationOpenTransParamsField.
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
      InternalReconciliationOpenTransParams,
      fieldOptions
    );
  }
}

export namespace InternalReconciliationOpenTransParams {
  /**
   * Metadata information on all properties of the `InternalReconciliationOpenTransParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTransParams>[] =
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
        originalName: 'AccountNo',
        name: 'accountNo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DateType',
        name: 'dateType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'FromDate',
        name: 'fromDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ToDate',
        name: 'toDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'InternalReconciliationBPs',
        name: 'internalReconciliationBPs',
        type: InternalReconciliationBp,
        isCollection: true
      }
    ];
}
