/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountSegmentationCategories } from './AccountSegmentationCategories';
import { AccountSegmentationCategoriesRequestBuilder } from './AccountSegmentationCategoriesRequestBuilder';
import { AccountSegmentationsApi } from './AccountSegmentationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AccountSegmentationCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AccountSegmentationCategories<DeSerializersT>, DeSerializersT>
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
  ): AccountSegmentationCategoriesApi<DeSerializersT> {
    return new AccountSegmentationCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link accountSegmentation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_SEGMENTATION: OneToOneLink<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT,
      AccountSegmentationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccountSegmentationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ACCOUNT_SEGMENTATION: new OneToOneLink(
        'AccountSegmentation',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AccountSegmentationCategories;

  requestBuilder(): AccountSegmentationCategoriesRequestBuilder<DeSerializersT> {
    return new AccountSegmentationCategoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AccountSegmentationCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccountSegmentationCategories<DeSerializersT>,
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
    typeof AccountSegmentationCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountSegmentationCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEGMENT_ID: OrderableEdmTypeField<
      AccountSegmentationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      AccountSegmentationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AccountSegmentationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      AccountSegmentationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accountSegmentation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_SEGMENTATION: OneToOneLink<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT,
      AccountSegmentationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountSegmentationCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link segmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_ID: fieldBuilder.buildEdmTypeField(
          'SegmentID',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccountSegmentationCategories)
      };
    }

    return this._schema;
  }
}
