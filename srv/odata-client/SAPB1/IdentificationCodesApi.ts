/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdentificationCodes } from './IdentificationCodes';
import { IdentificationCodesRequestBuilder } from './IdentificationCodesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { IdentificationCodeTypeEnum } from './IdentificationCodeTypeEnum';
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
export class IdentificationCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IdentificationCodes<DeSerializersT>, DeSerializersT>
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
  ): IdentificationCodesApi<DeSerializersT> {
    return new IdentificationCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      IdentificationCodes<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ItemsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = IdentificationCodes;

  requestBuilder(): IdentificationCodesRequestBuilder<DeSerializersT> {
    return new IdentificationCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdentificationCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IdentificationCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IdentificationCodes<DeSerializersT>,
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
    typeof IdentificationCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IdentificationCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      IdentificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODELIST: EnumField<
      IdentificationCodes<DeSerializers>,
      DeSerializersT,
      IdentificationCodeTypeEnum,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      IdentificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IdentificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEMA_CODE: OrderableEdmTypeField<
      IdentificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEMA_DESC: OrderableEdmTypeField<
      IdentificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      IdentificationCodes<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IdentificationCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link codelist} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODELIST: fieldBuilder.buildEnumField(
          'Codelist',
          IdentificationCodeTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
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
         * Static representation of the {@link schemaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEMA_CODE: fieldBuilder.buildEdmTypeField(
          'SchemaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link schemaDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEMA_DESC: fieldBuilder.buildEdmTypeField(
          'SchemaDesc',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IdentificationCodes)
      };
    }

    return this._schema;
  }
}
