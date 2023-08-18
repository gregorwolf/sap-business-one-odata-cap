/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerGroups } from './BusinessPartnerGroups';
import { BusinessPartnerGroupsRequestBuilder } from './BusinessPartnerGroupsRequestBuilder';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { BoBusinessPartnerGroupTypes } from './BoBusinessPartnerGroupTypes';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BusinessPartnerGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartnerGroups<DeSerializersT>, DeSerializersT>
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
  ): BusinessPartnerGroupsApi<DeSerializersT> {
    return new BusinessPartnerGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      BusinessPartnerGroups<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      BusinessPartnerGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GlAccountAdvancedRulesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[0]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BusinessPartnerGroups;

  requestBuilder(): BusinessPartnerGroupsRequestBuilder<DeSerializersT> {
    return new BusinessPartnerGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartnerGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessPartnerGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessPartnerGroups<DeSerializersT>,
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
    typeof BusinessPartnerGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartnerGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      BusinessPartnerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      BusinessPartnerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      BusinessPartnerGroups<DeSerializers>,
      DeSerializersT,
      BoBusinessPartnerGroupTypes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      BusinessPartnerGroups<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      BusinessPartnerGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          BoBusinessPartnerGroupTypes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartnerGroups)
      };
    }

    return this._schema;
  }
}
