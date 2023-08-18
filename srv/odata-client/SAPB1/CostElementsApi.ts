/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostElements } from './CostElements';
import { CostElementsRequestBuilder } from './CostElementsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
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
export class CostElementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CostElements<DeSerializersT>, DeSerializersT>
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
  ): CostElementsApi<DeSerializersT> {
    return new CostElementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      CostElements<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ChartOfAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNTS: new OneToManyLink(
        'ChartOfAccounts',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CostElements;

  requestBuilder(): CostElementsRequestBuilder<DeSerializersT> {
    return new CostElementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostElements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CostElements<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CostElements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CostElements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CostElements, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      CostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      CostElements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      CostElements<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CostElements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
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
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostElements)
      };
    }

    return this._schema;
  }
}
