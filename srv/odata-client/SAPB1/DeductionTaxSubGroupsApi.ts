/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionTaxSubGroups } from './DeductionTaxSubGroups';
import { DeductionTaxSubGroupsRequestBuilder } from './DeductionTaxSubGroupsRequestBuilder';
import { DeductionTaxGroupsApi } from './DeductionTaxGroupsApi';
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
export class DeductionTaxSubGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeductionTaxSubGroups<DeSerializersT>, DeSerializersT>
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
  ): DeductionTaxSubGroupsApi<DeSerializersT> {
    return new DeductionTaxSubGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link deductionTaxGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_TAX_GROUPS: OneToManyLink<
      DeductionTaxSubGroups<DeSerializersT>,
      DeSerializersT,
      DeductionTaxGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DeductionTaxGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEDUCTION_TAX_GROUPS: new OneToManyLink(
        'DeductionTaxGroups',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DeductionTaxSubGroups;

  requestBuilder(): DeductionTaxSubGroupsRequestBuilder<DeSerializersT> {
    return new DeductionTaxSubGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeductionTaxSubGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeductionTaxSubGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeductionTaxSubGroups<DeSerializersT>,
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
    typeof DeductionTaxSubGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeductionTaxSubGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_CODE: OrderableEdmTypeField<
      DeductionTaxSubGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      DeductionTaxSubGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionTaxGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_TAX_GROUPS: OneToManyLink<
      DeductionTaxSubGroups<DeSerializersT>,
      DeSerializersT,
      DeductionTaxGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeductionTaxSubGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeductionTaxSubGroups)
      };
    }

    return this._schema;
  }
}
