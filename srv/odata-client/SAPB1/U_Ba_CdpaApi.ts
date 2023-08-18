/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Cdpa } from './U_Ba_Cdpa';
import { U_Ba_CdpaRequestBuilder } from './U_Ba_CdpaRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Ba_CdpaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_CdpaApi<DeSerializersT> {
    return new U_Ba_CdpaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Cdpa;

  requestBuilder(): U_Ba_CdpaRequestBuilder<DeSerializersT> {
    return new U_Ba_CdpaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Cdpa<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Cdpa<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Cdpa, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Cdpa, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_POST_GL: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DIRECT_DP: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RET_METH: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_POST_MODE: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DEF_NAME: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AREA_TYPE: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DRVD_AREA: OrderableEdmTypeField<
      U_Ba_Cdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Cdpa<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uDprArId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_AR_ID: fieldBuilder.buildEdmTypeField(
          'U_DprArID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uPostGl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_GL: fieldBuilder.buildEdmTypeField(
          'U_PostGL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDirectDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DIRECT_DP: fieldBuilder.buildEdmTypeField(
          'U_DirectDp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRetMeth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RET_METH: fieldBuilder.buildEdmTypeField(
          'U_RetMeth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uPostMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_MODE: fieldBuilder.buildEdmTypeField(
          'U_PostMode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDefName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEF_NAME: fieldBuilder.buildEdmTypeField(
          'U_DefName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAreaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AREA_TYPE: fieldBuilder.buildEdmTypeField(
          'U_AreaType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDrvdArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DRVD_AREA: fieldBuilder.buildEdmTypeField(
          'U_DrvdArea',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Cdpa)
      };
    }

    return this._schema;
  }
}
