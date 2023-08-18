/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountSegmentations } from './AccountSegmentations';
import { AccountSegmentationsRequestBuilder } from './AccountSegmentationsRequestBuilder';
import { AccountSegmentationCategoriesApi } from './AccountSegmentationCategoriesApi';
import { AccountSegmentationsCategory } from './AccountSegmentationsCategory';
import { AccountSegmentationTypeEnum } from './AccountSegmentationTypeEnum';
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
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AccountSegmentationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccountSegmentations<DeSerializersT>, DeSerializersT>
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
  ): AccountSegmentationsApi<DeSerializersT> {
    return new AccountSegmentationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link accountSegmentationCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_SEGMENTATION_CATEGORIES: OneToManyLink<
      AccountSegmentations<DeSerializersT>,
      DeSerializersT,
      AccountSegmentationCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccountSegmentationCategoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ACCOUNT_SEGMENTATION_CATEGORIES: new OneToManyLink(
        'AccountSegmentationCategories',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AccountSegmentations;

  requestBuilder(): AccountSegmentationsRequestBuilder<DeSerializersT> {
    return new AccountSegmentationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccountSegmentations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccountSegmentations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccountSegmentations<DeSerializersT>,
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
    typeof AccountSegmentations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountSegmentations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NUMERATOR: OrderableEdmTypeField<
      AccountSegmentations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AccountSegmentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      AccountSegmentations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TYPE: EnumField<
      AccountSegmentations<DeSerializers>,
      DeSerializersT,
      AccountSegmentationTypeEnum,
      true,
      true
    >;
    ACCOUNT_SEGMENTATIONS_CATEGORIES: CollectionField<
      AccountSegmentations<DeSerializers>,
      DeSerializersT,
      AccountSegmentationsCategory,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accountSegmentationCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_SEGMENTATION_CATEGORIES: OneToManyLink<
      AccountSegmentations<DeSerializersT>,
      DeSerializersT,
      AccountSegmentationCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountSegmentations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.Int32', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          AccountSegmentationTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link accountSegmentationsCategories} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_SEGMENTATIONS_CATEGORIES: fieldBuilder.buildCollectionField(
          'AccountSegmentationsCategories',
          AccountSegmentationsCategory,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccountSegmentations)
      };
    }

    return this._schema;
  }
}
