/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionTaxGroups } from './DeductionTaxGroups';
import { DeductionTaxGroupsRequestBuilder } from './DeductionTaxGroupsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { DeductionTaxSubGroupsApi } from './DeductionTaxSubGroupsApi';
import { BoDeductionTaxGroupCodeEnum } from './BoDeductionTaxGroupCodeEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DeductionTaxGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeductionTaxGroups<DeSerializersT>, DeSerializersT>
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
  ): DeductionTaxGroupsApi<DeSerializersT> {
    return new DeductionTaxGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      DeductionTaxGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deductionTaxSubGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_TAX_SUB_GROUP: OneToOneLink<
      DeductionTaxGroups<DeSerializersT>,
      DeSerializersT,
      DeductionTaxSubGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      DeductionTaxSubGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[0]
      ),
      DEDUCTION_TAX_SUB_GROUP: new OneToOneLink(
        'DeductionTaxSubGroup',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DeductionTaxGroups;

  requestBuilder(): DeductionTaxGroupsRequestBuilder<DeSerializersT> {
    return new DeductionTaxGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeductionTaxGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeductionTaxGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeductionTaxGroups<DeSerializersT>,
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
    typeof DeductionTaxGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeductionTaxGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_KEY: OrderableEdmTypeField<
      DeductionTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROUP_CODE: EnumField<
      DeductionTaxGroups<DeSerializers>,
      DeSerializersT,
      BoDeductionTaxGroupCodeEnum,
      true,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      DeductionTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_REDIN: OrderableEdmTypeField<
      DeductionTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    GROUP_EXTENDED_CODE: OrderableEdmTypeField<
      DeductionTaxGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      DeductionTaxGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deductionTaxSubGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_TAX_SUB_GROUP: OneToOneLink<
      DeductionTaxGroups<DeSerializersT>,
      DeSerializersT,
      DeductionTaxSubGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeductionTaxGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_KEY: fieldBuilder.buildEdmTypeField(
          'GroupKey',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEnumField(
          'GroupCode',
          BoDeductionTaxGroupCodeEnum,
          true
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxRedin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_REDIN: fieldBuilder.buildEdmTypeField(
          'MaxRedin',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link groupExtendedCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_EXTENDED_CODE: fieldBuilder.buildEdmTypeField(
          'GroupExtendedCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeductionTaxGroups)
      };
    }

    return this._schema;
  }
}
