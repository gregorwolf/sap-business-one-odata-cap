/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CommissionGroups } from './CommissionGroups';
import { CommissionGroupsRequestBuilder } from './CommissionGroupsRequestBuilder';
import { SalesPersonsApi } from './SalesPersonsApi';
import { ItemsApi } from './ItemsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
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
export class CommissionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CommissionGroups<DeSerializersT>, DeSerializersT>
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
  ): CommissionGroupsApi<DeSerializersT> {
    return new CommissionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesPersons} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSONS: OneToManyLink<
      CommissionGroups<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      CommissionGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      CommissionGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesPersonsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_PERSONS: new OneToManyLink('SalesPersons', this, linkedApis[0]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[1]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CommissionGroups;

  requestBuilder(): CommissionGroupsRequestBuilder<DeSerializersT> {
    return new CommissionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CommissionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CommissionGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CommissionGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CommissionGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CommissionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMMISSION_GROUP_CODE: OrderableEdmTypeField<
      CommissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMISSION_GROUP_NAME: OrderableEdmTypeField<
      CommissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_PERCENTAGE: OrderableEdmTypeField<
      CommissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesPersons} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSONS: OneToManyLink<
      CommissionGroups<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      CommissionGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      CommissionGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CommissionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link commissionGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'CommissionGroupCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link commissionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CommissionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CommissionPercentage',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CommissionGroups)
      };
    }

    return this._schema;
  }
}
