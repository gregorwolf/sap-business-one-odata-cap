/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NotaFiscalCfop } from './NotaFiscalCfop';
import { NotaFiscalCfopRequestBuilder } from './NotaFiscalCfopRequestBuilder';
import { NotaFiscalUsageApi } from './NotaFiscalUsageApi';
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
export class NotaFiscalCfopApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NotaFiscalCfop<DeSerializersT>, DeSerializersT>
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
  ): NotaFiscalCfopApi<DeSerializersT> {
    return new NotaFiscalCfopApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link notaFiscalUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_USAGE: OneToManyLink<
      NotaFiscalCfop<DeSerializersT>,
      DeSerializersT,
      NotaFiscalUsageApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [NotaFiscalUsageApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      NOTA_FISCAL_USAGE: new OneToManyLink(
        'NotaFiscalUsage',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = NotaFiscalCfop;

  requestBuilder(): NotaFiscalCfopRequestBuilder<DeSerializersT> {
    return new NotaFiscalCfopRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NotaFiscalCfop<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NotaFiscalCfop<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NotaFiscalCfop<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NotaFiscalCfop, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NotaFiscalCfop, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      NotaFiscalCfop<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NotaFiscalCfop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      NotaFiscalCfop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION: OrderableEdmTypeField<
      NotaFiscalCfop<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link notaFiscalUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_USAGE: OneToManyLink<
      NotaFiscalCfop<DeSerializersT>,
      DeSerializersT,
      NotaFiscalUsageApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NotaFiscalCfop<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link application} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION: fieldBuilder.buildEdmTypeField(
          'Application',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NotaFiscalCfop)
      };
    }

    return this._schema;
  }
}
