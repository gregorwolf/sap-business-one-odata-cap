/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunitySourcesSetup } from './SalesOpportunitySourcesSetup';
import { SalesOpportunitySourcesSetupRequestBuilder } from './SalesOpportunitySourcesSetupRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesOpportunitySourcesSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOpportunitySourcesSetup<DeSerializersT>, DeSerializersT>
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
  ): SalesOpportunitySourcesSetupApi<DeSerializersT> {
    return new SalesOpportunitySourcesSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SalesOpportunitiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SALES_OPPORTUNITIES: new OneToManyLink(
        'SalesOpportunities',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SalesOpportunitySourcesSetup;

  requestBuilder(): SalesOpportunitySourcesSetupRequestBuilder<DeSerializersT> {
    return new SalesOpportunitySourcesSetupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOpportunitySourcesSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOpportunitySourcesSetup<DeSerializersT>,
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
    typeof SalesOpportunitySourcesSetup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOpportunitySourcesSetup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEQUENCE_NO: OrderableEdmTypeField<
      SalesOpportunitySourcesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesOpportunitySourcesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT: OrderableEdmTypeField<
      SalesOpportunitySourcesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOpportunitySourcesSetup<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT: fieldBuilder.buildEdmTypeField('Sort', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOpportunitySourcesSetup)
      };
    }

    return this._schema;
  }
}
