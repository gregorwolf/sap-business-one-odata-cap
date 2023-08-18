/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunityInterestsSetup } from './SalesOpportunityInterestsSetup';
import { SalesOpportunityInterestsSetupRequestBuilder } from './SalesOpportunityInterestsSetupRequestBuilder';
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
export class SalesOpportunityInterestsSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOpportunityInterestsSetup<DeSerializersT>, DeSerializersT>
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
  ): SalesOpportunityInterestsSetupApi<DeSerializersT> {
    return new SalesOpportunityInterestsSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      SalesOpportunityInterestsSetup<DeSerializersT>,
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

  entityConstructor = SalesOpportunityInterestsSetup;

  requestBuilder(): SalesOpportunityInterestsSetupRequestBuilder<DeSerializersT> {
    return new SalesOpportunityInterestsSetupRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesOpportunityInterestsSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOpportunityInterestsSetup<DeSerializersT>,
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
    typeof SalesOpportunityInterestsSetup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOpportunityInterestsSetup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEQUENCE_NO: OrderableEdmTypeField<
      SalesOpportunityInterestsSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesOpportunityInterestsSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT: OrderableEdmTypeField<
      SalesOpportunityInterestsSetup<DeSerializers>,
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
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOpportunityInterestsSetup<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', SalesOpportunityInterestsSetup)
      };
    }

    return this._schema;
  }
}