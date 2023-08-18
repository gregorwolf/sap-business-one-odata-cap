/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Cockpits } from './Cockpits';
import { CockpitsRequestBuilder } from './CockpitsRequestBuilder';
import { UsersApi } from './UsersApi';
import { BoCockpitTypeEnum } from './BoCockpitTypeEnum';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CockpitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Cockpits<DeSerializersT>, DeSerializersT>
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
  ): CockpitsApi<DeSerializersT> {
    return new CockpitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Cockpits<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UsersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      USER: new OneToOneLink('User', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Cockpits;

  requestBuilder(): CockpitsRequestBuilder<DeSerializersT> {
    return new CockpitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Cockpits<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Cockpits<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Cockpits<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Cockpits, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Cockpits, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TIME: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    MANUFACTURER: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUBLISHER: OrderableEdmTypeField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COCKPIT_TYPE: EnumField<
      Cockpits<DeSerializers>,
      DeSerializersT,
      BoCockpitTypeEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Cockpits<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Cockpits<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link time} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME: fieldBuilder.buildEdmTypeField('Time', 'Edm.TimeOfDay', true),
        /**
         * Static representation of the {@link manufacturer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER: fieldBuilder.buildEdmTypeField(
          'Manufacturer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link publisher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHER: fieldBuilder.buildEdmTypeField(
          'Publisher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cockpitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COCKPIT_TYPE: fieldBuilder.buildEnumField(
          'CockpitType',
          BoCockpitTypeEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Cockpits)
      };
    }

    return this._schema;
  }
}
