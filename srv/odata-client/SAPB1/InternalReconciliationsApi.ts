/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InternalReconciliations } from './InternalReconciliations';
import { InternalReconciliationsRequestBuilder } from './InternalReconciliationsRequestBuilder';
import { InternalReconciliationRow } from './InternalReconciliationRow';
import { ElectronicProtocol } from './ElectronicProtocol';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { ReconTypeEnum } from './ReconTypeEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class InternalReconciliationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InternalReconciliations<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): InternalReconciliationsApi<DeSerializersT> {
    return new InternalReconciliationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InternalReconciliations;

  requestBuilder(): InternalReconciliationsRequestBuilder<DeSerializersT> {
    return new InternalReconciliationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InternalReconciliations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InternalReconciliations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InternalReconciliations<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InternalReconciliations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InternalReconciliations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECON_NUM: OrderableEdmTypeField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECON_DATE: OrderableEdmTypeField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CARD_OR_ACCOUNT: EnumField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      CardOrAccountEnum,
      true,
      true
    >;
    RECON_TYPE: EnumField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      ReconTypeEnum,
      true,
      true
    >;
    TOTAL: OrderableEdmTypeField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CANCEL_ABS: OrderableEdmTypeField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTERNAL_RECONCILIATION_ROWS: CollectionField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      InternalReconciliationRow,
      true,
      true
    >;
    ELECTRONIC_PROTOCOLS: CollectionField<
      InternalReconciliations<DeSerializers>,
      DeSerializersT,
      ElectronicProtocol,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InternalReconciliations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link reconNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECON_NUM: fieldBuilder.buildEdmTypeField(
          'ReconNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reconDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECON_DATE: fieldBuilder.buildEdmTypeField(
          'ReconDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link cardOrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_OR_ACCOUNT: fieldBuilder.buildEnumField(
          'CardOrAccount',
          CardOrAccountEnum,
          true
        ),
        /**
         * Static representation of the {@link reconType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECON_TYPE: fieldBuilder.buildEnumField(
          'ReconType',
          ReconTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link total} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL: fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true),
        /**
         * Static representation of the {@link cancelAbs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_ABS: fieldBuilder.buildEdmTypeField(
          'CancelAbs',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link internalReconciliationRows} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_RECONCILIATION_ROWS: fieldBuilder.buildCollectionField(
          'InternalReconciliationRows',
          InternalReconciliationRow,
          true
        ),
        /**
         * Static representation of the {@link electronicProtocols} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PROTOCOLS: fieldBuilder.buildCollectionField(
          'ElectronicProtocols',
          ElectronicProtocol,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InternalReconciliations)
      };
    }

    return this._schema;
  }
}
