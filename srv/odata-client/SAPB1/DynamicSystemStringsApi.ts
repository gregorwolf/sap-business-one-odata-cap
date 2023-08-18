/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DynamicSystemStrings } from './DynamicSystemStrings';
import { DynamicSystemStringsRequestBuilder } from './DynamicSystemStringsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DynamicSystemStringsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DynamicSystemStrings<DeSerializersT>, DeSerializersT>
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
  ): DynamicSystemStringsApi<DeSerializersT> {
    return new DynamicSystemStringsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DynamicSystemStrings;

  requestBuilder(): DynamicSystemStringsRequestBuilder<DeSerializersT> {
    return new DynamicSystemStringsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DynamicSystemStrings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DynamicSystemStrings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DynamicSystemStrings<DeSerializersT>,
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
    typeof DynamicSystemStrings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DynamicSystemStrings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORM_ID: OrderableEdmTypeField<
      DynamicSystemStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      DynamicSystemStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLUMN_ID: OrderableEdmTypeField<
      DynamicSystemStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_STRING: OrderableEdmTypeField<
      DynamicSystemStrings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BOLD: EnumField<
      DynamicSystemStrings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_ITALICS: EnumField<
      DynamicSystemStrings<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DynamicSystemStrings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_ID: fieldBuilder.buildEdmTypeField('FormID', 'Edm.String', false),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemID', 'Edm.String', false),
        /**
         * Static representation of the {@link columnId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_ID: fieldBuilder.buildEdmTypeField(
          'ColumnID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_STRING: fieldBuilder.buildEdmTypeField(
          'ItemString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BOLD: fieldBuilder.buildEnumField('IsBold', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isItalics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITALICS: fieldBuilder.buildEnumField('IsItalics', BoYesNoEnum, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DynamicSystemStrings)
      };
    }

    return this._schema;
  }
}
