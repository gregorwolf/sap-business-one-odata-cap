/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormPreferences } from './FormPreferences';
import { FormPreferencesRequestBuilder } from './FormPreferencesRequestBuilder';
import { UsersApi } from './UsersApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FormPreferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FormPreferences<DeSerializersT>, DeSerializersT>
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
  ): FormPreferencesApi<DeSerializersT> {
    return new FormPreferencesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link user2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_2: OneToOneLink<
      FormPreferences<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UsersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      USER_2: new OneToOneLink('User2', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FormPreferences;

  requestBuilder(): FormPreferencesRequestBuilder<DeSerializersT> {
    return new FormPreferencesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FormPreferences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FormPreferences<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FormPreferences<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FormPreferences, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FormPreferences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORM_ID: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLUMN: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VISIBLE_IN_FORM: EnumField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TABS_LAYOUT: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EDITABLE_IN_FORM: EnumField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VISIBLE_IN_EXPANDED: EnumField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EXPANDED_INDEX: OrderableEdmTypeField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EDITABLE_IN_EXPANDED: EnumField<
      FormPreferences<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_2: OneToOneLink<
      FormPreferences<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FormPreferences<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.Int32', false),
        /**
         * Static representation of the {@link formId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_ID: fieldBuilder.buildEdmTypeField('FormID', 'Edm.String', false),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link column} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN: fieldBuilder.buildEdmTypeField('Column', 'Edm.String', false),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('Width', 'Edm.Int32', true),
        /**
         * Static representation of the {@link visibleInForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISIBLE_IN_FORM: fieldBuilder.buildEnumField(
          'VisibleInForm',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link tabsLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABS_LAYOUT: fieldBuilder.buildEdmTypeField(
          'TabsLayout',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link editableInForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDITABLE_IN_FORM: fieldBuilder.buildEnumField(
          'EditableInForm',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link visibleInExpanded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISIBLE_IN_EXPANDED: fieldBuilder.buildEnumField(
          'VisibleInExpanded',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link expandedIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPANDED_INDEX: fieldBuilder.buildEdmTypeField(
          'ExpandedIndex',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link editableInExpanded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDITABLE_IN_EXPANDED: fieldBuilder.buildEnumField(
          'EditableInExpanded',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FormPreferences)
      };
    }

    return this._schema;
  }
}
