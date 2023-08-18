/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Industries } from './Industries';
import { IndustriesRequestBuilder } from './IndustriesRequestBuilder';
import { SalesOpportunitiesApi } from './SalesOpportunitiesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ProjectManagementsApi } from './ProjectManagementsApi';
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
export class IndustriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Industries<DeSerializersT>, DeSerializersT>
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
  ): IndustriesApi<DeSerializersT> {
    return new IndustriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      Industries<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Industries<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      Industries<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOpportunitiesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      ProjectManagementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_OPPORTUNITIES: new OneToManyLink(
        'SalesOpportunities',
        this,
        linkedApis[0]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[1]
      ),
      PROJECT_MANAGEMENTS: new OneToManyLink(
        'ProjectManagements',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = Industries;

  requestBuilder(): IndustriesRequestBuilder<DeSerializersT> {
    return new IndustriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Industries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Industries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Industries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Industries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Industries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INDUSTRY_DESCRIPTION: OrderableEdmTypeField<
      Industries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY_NAME: OrderableEdmTypeField<
      Industries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY_CODE: OrderableEdmTypeField<
      Industries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOpportunities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_OPPORTUNITIES: OneToManyLink<
      Industries<DeSerializersT>,
      DeSerializersT,
      SalesOpportunitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      Industries<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      Industries<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Industries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link industryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'IndustryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_NAME: fieldBuilder.buildEdmTypeField(
          'IndustryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_CODE: fieldBuilder.buildEdmTypeField(
          'IndustryCode',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Industries)
      };
    }

    return this._schema;
  }
}
