/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Pictures } from './Pictures';
import { PicturesRequestBuilder } from './PicturesRequestBuilder';
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
export class PicturesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Pictures<DeSerializersT>, DeSerializersT>
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
  ): PicturesApi<DeSerializersT> {
    return new PicturesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Pictures;

  requestBuilder(): PicturesRequestBuilder<DeSerializersT> {
    return new PicturesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Pictures<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Pictures<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Pictures<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Pictures, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Pictures, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PICTURE_NAME: OrderableEdmTypeField<
      Pictures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICTURE_PATH: OrderableEdmTypeField<
      Pictures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICTURE_SIZE: OrderableEdmTypeField<
      Pictures<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PICTURE_CREATE_DATE: OrderableEdmTypeField<
      Pictures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICTURE_MODIFY_DATE: OrderableEdmTypeField<
      Pictures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Pictures<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link pictureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_NAME: fieldBuilder.buildEdmTypeField(
          'PictureName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link picturePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_PATH: fieldBuilder.buildEdmTypeField(
          'PicturePath',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pictureSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_SIZE: fieldBuilder.buildEdmTypeField(
          'PictureSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pictureCreateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'PictureCreateDate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pictureModifyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_MODIFY_DATE: fieldBuilder.buildEdmTypeField(
          'PictureModifyDate',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Pictures)
      };
    }

    return this._schema;
  }
}
