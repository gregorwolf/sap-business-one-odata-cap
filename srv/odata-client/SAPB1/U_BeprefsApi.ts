/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Beprefs } from './U_Beprefs';
import { U_BeprefsRequestBuilder } from './U_BeprefsRequestBuilder';
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
export class U_BeprefsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Beprefs<DeSerializersT>, DeSerializersT>
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
  ): U_BeprefsApi<DeSerializersT> {
    return new U_BeprefsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Beprefs;

  requestBuilder(): U_BeprefsRequestBuilder<DeSerializersT> {
    return new U_BeprefsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Beprefs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Beprefs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Beprefs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Beprefs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Beprefs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BESAPD: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BESAPM: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BESAPA: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BETSTF: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BECNTY: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BEOFFC: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BERADA: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BEAMRT: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BECOFP: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BEDOCS: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BENOTE: OrderableEdmTypeField<
      U_Beprefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Beprefs<DeSerializers>>;
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
         * Static representation of the {@link uBesapd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BESAPD: fieldBuilder.buildEdmTypeField(
          'U_BESAPD',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBesapm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BESAPM: fieldBuilder.buildEdmTypeField(
          'U_BESAPM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBesapa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BESAPA: fieldBuilder.buildEdmTypeField(
          'U_BESAPA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBetstf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BETSTF: fieldBuilder.buildEdmTypeField(
          'U_BETSTF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBecnty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BECNTY: fieldBuilder.buildEdmTypeField(
          'U_BECNTY',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBeoffc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BEOFFC: fieldBuilder.buildEdmTypeField(
          'U_BEOFFC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBerada} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BERADA: fieldBuilder.buildEdmTypeField(
          'U_BERADA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBeamrt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BEAMRT: fieldBuilder.buildEdmTypeField(
          'U_BEAMRT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBecofp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BECOFP: fieldBuilder.buildEdmTypeField(
          'U_BECOFP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBedocs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BEDOCS: fieldBuilder.buildEdmTypeField(
          'U_BEDOCS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBenote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BENOTE: fieldBuilder.buildEdmTypeField(
          'U_BENOTE',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Beprefs)
      };
    }

    return this._schema;
  }
}
