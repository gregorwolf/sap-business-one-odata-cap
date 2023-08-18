/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminations } from './TaxCodeDeterminations';
import { TaxCodeDeterminationsRequestBuilder } from './TaxCodeDeterminationsRequestBuilder';
import { BoTcdDocumentTypeEnum } from './BoTcdDocumentTypeEnum';
import { BoBusinessAreaEnum } from './BoBusinessAreaEnum';
import { BoTcdConditionEnum } from './BoTcdConditionEnum';
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
export class TaxCodeDeterminationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxCodeDeterminations<DeSerializersT>, DeSerializersT>
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
  ): TaxCodeDeterminationsApi<DeSerializersT> {
    return new TaxCodeDeterminationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxCodeDeterminations;

  requestBuilder(): TaxCodeDeterminationsRequestBuilder<DeSerializersT> {
    return new TaxCodeDeterminationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxCodeDeterminations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxCodeDeterminations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxCodeDeterminations<DeSerializersT>,
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
    typeof TaxCodeDeterminations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxCodeDeterminations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoTcdDocumentTypeEnum,
      true,
      true
    >;
    BUSINESS_AREA: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoBusinessAreaEnum,
      true,
      true
    >;
    CONDITION_1: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoTcdConditionEnum,
      true,
      true
    >;
    UDF_TABLE_1: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_VALUE_1: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STRING_VALUE_1: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONEY_VALUE_1: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CONDITION_2: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoTcdConditionEnum,
      true,
      true
    >;
    UDF_TABLE_2: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_VALUE_2: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STRING_VALUE_2: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONEY_VALUE_2: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CONDITION_3: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoTcdConditionEnum,
      true,
      true
    >;
    UDF_TABLE_3: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_VALUE_3: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STRING_VALUE_3: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONEY_VALUE_3: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CONDITION_4: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoTcdConditionEnum,
      true,
      true
    >;
    UDF_TABLE_4: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_VALUE_4: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STRING_VALUE_4: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONEY_VALUE_4: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CONDITION_5: EnumField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      BoTcdConditionEnum,
      true,
      true
    >;
    UDF_TABLE_5: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_VALUE_5: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STRING_VALUE_5: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONEY_VALUE_5: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_ROW_TAX: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_HEADER_TAX: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_ALIAS_1: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_ALIAS_2: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_ALIAS_3: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_ALIAS_4: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_ALIAS_5: OrderableEdmTypeField<
      TaxCodeDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxCodeDeterminations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          BoTcdDocumentTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link businessArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_AREA: fieldBuilder.buildEnumField(
          'BusinessArea',
          BoBusinessAreaEnum,
          true
        ),
        /**
         * Static representation of the {@link condition1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_1: fieldBuilder.buildEnumField(
          'Condition1',
          BoTcdConditionEnum,
          true
        ),
        /**
         * Static representation of the {@link udfTable1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_TABLE_1: fieldBuilder.buildEdmTypeField(
          'UDFTable1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_VALUE_1: fieldBuilder.buildEdmTypeField(
          'NumberValue1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link stringValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE_1: fieldBuilder.buildEdmTypeField(
          'StringValue1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link moneyValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONEY_VALUE_1: fieldBuilder.buildEdmTypeField(
          'MoneyValue1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link condition2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_2: fieldBuilder.buildEnumField(
          'Condition2',
          BoTcdConditionEnum,
          true
        ),
        /**
         * Static representation of the {@link udfTable2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_TABLE_2: fieldBuilder.buildEdmTypeField(
          'UDFTable2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_VALUE_2: fieldBuilder.buildEdmTypeField(
          'NumberValue2',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link stringValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE_2: fieldBuilder.buildEdmTypeField(
          'StringValue2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link moneyValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONEY_VALUE_2: fieldBuilder.buildEdmTypeField(
          'MoneyValue2',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link condition3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_3: fieldBuilder.buildEnumField(
          'Condition3',
          BoTcdConditionEnum,
          true
        ),
        /**
         * Static representation of the {@link udfTable3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_TABLE_3: fieldBuilder.buildEdmTypeField(
          'UDFTable3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_VALUE_3: fieldBuilder.buildEdmTypeField(
          'NumberValue3',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link stringValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE_3: fieldBuilder.buildEdmTypeField(
          'StringValue3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link moneyValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONEY_VALUE_3: fieldBuilder.buildEdmTypeField(
          'MoneyValue3',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link condition4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_4: fieldBuilder.buildEnumField(
          'Condition4',
          BoTcdConditionEnum,
          true
        ),
        /**
         * Static representation of the {@link udfTable4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_TABLE_4: fieldBuilder.buildEdmTypeField(
          'UDFTable4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_VALUE_4: fieldBuilder.buildEdmTypeField(
          'NumberValue4',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link stringValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE_4: fieldBuilder.buildEdmTypeField(
          'StringValue4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link moneyValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONEY_VALUE_4: fieldBuilder.buildEdmTypeField(
          'MoneyValue4',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link condition5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_5: fieldBuilder.buildEnumField(
          'Condition5',
          BoTcdConditionEnum,
          true
        ),
        /**
         * Static representation of the {@link udfTable5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_TABLE_5: fieldBuilder.buildEdmTypeField(
          'UDFTable5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_VALUE_5: fieldBuilder.buildEdmTypeField(
          'NumberValue5',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link stringValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRING_VALUE_5: fieldBuilder.buildEdmTypeField(
          'StringValue5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link moneyValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONEY_VALUE_5: fieldBuilder.buildEdmTypeField(
          'MoneyValue5',
          'Edm.Double',
          true
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
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link freightRowTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_ROW_TAX: fieldBuilder.buildEdmTypeField(
          'FreightRowTax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightHeaderTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_HEADER_TAX: fieldBuilder.buildEdmTypeField(
          'FreightHeaderTax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link udfAlias1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_ALIAS_1: fieldBuilder.buildEdmTypeField(
          'UDFAlias1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link udfAlias2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_ALIAS_2: fieldBuilder.buildEdmTypeField(
          'UDFAlias2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link udfAlias3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_ALIAS_3: fieldBuilder.buildEdmTypeField(
          'UDFAlias3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link udfAlias4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_ALIAS_4: fieldBuilder.buildEdmTypeField(
          'UDFAlias4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link udfAlias5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_ALIAS_5: fieldBuilder.buildEdmTypeField(
          'UDFAlias5',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxCodeDeterminations)
      };
    }

    return this._schema;
  }
}
