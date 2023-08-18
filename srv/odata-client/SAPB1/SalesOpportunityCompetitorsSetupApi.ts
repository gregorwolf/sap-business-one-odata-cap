/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunityCompetitorsSetup } from './SalesOpportunityCompetitorsSetup';
import { SalesOpportunityCompetitorsSetupRequestBuilder } from './SalesOpportunityCompetitorsSetupRequestBuilder';
import { ThreatLevelEnum } from './ThreatLevelEnum';
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
export class SalesOpportunityCompetitorsSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOpportunityCompetitorsSetup<DeSerializersT>, DeSerializersT>
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
  ): SalesOpportunityCompetitorsSetupApi<DeSerializersT> {
    return new SalesOpportunityCompetitorsSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesOpportunityCompetitorsSetup;

  requestBuilder(): SalesOpportunityCompetitorsSetupRequestBuilder<DeSerializersT> {
    return new SalesOpportunityCompetitorsSetupRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesOpportunityCompetitorsSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOpportunityCompetitorsSetup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOpportunityCompetitorsSetup<DeSerializersT>,
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
    typeof SalesOpportunityCompetitorsSetup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOpportunityCompetitorsSetup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEQUENCE_NO: OrderableEdmTypeField<
      SalesOpportunityCompetitorsSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesOpportunityCompetitorsSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THREAT_LEVEL: EnumField<
      SalesOpportunityCompetitorsSetup<DeSerializers>,
      DeSerializersT,
      ThreatLevelEnum,
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      SalesOpportunityCompetitorsSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesOpportunityCompetitorsSetup<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sequenceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NO: fieldBuilder.buildEdmTypeField(
          'SequenceNo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link threatLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THREAT_LEVEL: fieldBuilder.buildEnumField(
          'ThreatLevel',
          ThreatLevelEnum,
          true
        ),
        /**
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOpportunityCompetitorsSetup)
      };
    }

    return this._schema;
  }
}
