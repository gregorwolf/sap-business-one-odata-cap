/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BemReplicationPeriods } from './BemReplicationPeriods';
import { BemReplicationPeriodsRequestBuilder } from './BemReplicationPeriodsRequestBuilder';
import { BemPeriodicTypeEnum } from './BemPeriodicTypeEnum';
import { BemReplicationStatusEnum } from './BemReplicationStatusEnum';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BemReplicationPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BemReplicationPeriods<DeSerializersT>, DeSerializersT>
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
  ): BemReplicationPeriodsApi<DeSerializersT> {
    return new BemReplicationPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BemReplicationPeriods;

  requestBuilder(): BemReplicationPeriodsRequestBuilder<DeSerializersT> {
    return new BemReplicationPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BemReplicationPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BemReplicationPeriods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BemReplicationPeriods<DeSerializersT>,
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
    typeof BemReplicationPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BemReplicationPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCOPE_KEY: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE_NAME: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODIC: EnumField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      BemPeriodicTypeEnum,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS: EnumField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      BemReplicationStatusEnum,
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_REP_ID: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REP_MESSAGE: OrderableEdmTypeField<
      BemReplicationPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BemReplicationPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scopeKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_KEY: fieldBuilder.buildEdmTypeField(
          'ScopeKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scopeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_NAME: fieldBuilder.buildEdmTypeField(
          'ScopeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC: fieldBuilder.buildEnumField(
          'Periodic',
          BemPeriodicTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BemReplicationStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastRepId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_REP_ID: fieldBuilder.buildEdmTypeField(
          'LastRepId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link repMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REP_MESSAGE: fieldBuilder.buildEdmTypeField(
          'RepMessage',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BemReplicationPeriods)
      };
    }

    return this._schema;
  }
}
