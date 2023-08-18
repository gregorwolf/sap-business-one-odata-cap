/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalTemplates } from './ApprovalTemplates';
import { ApprovalTemplatesRequestBuilder } from './ApprovalTemplatesRequestBuilder';
import { ApprovalRequestsApi } from './ApprovalRequestsApi';
import { ApprovalTemplateUser } from './ApprovalTemplateUser';
import { ApprovalTemplateStage } from './ApprovalTemplateStage';
import { ApprovalTemplateDocument } from './ApprovalTemplateDocument';
import { ApprovalTemplateTerm } from './ApprovalTemplateTerm';
import { ApprovalTemplateQuery } from './ApprovalTemplateQuery';
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
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ApprovalTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApprovalTemplates<DeSerializersT>, DeSerializersT>
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
  ): ApprovalTemplatesApi<DeSerializersT> {
    return new ApprovalTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link approvalRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_REQUESTS: OneToManyLink<
      ApprovalTemplates<DeSerializersT>,
      DeSerializersT,
      ApprovalRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ApprovalRequestsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      APPROVAL_REQUESTS: new OneToManyLink(
        'ApprovalRequests',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ApprovalTemplates;

  requestBuilder(): ApprovalTemplatesRequestBuilder<DeSerializersT> {
    return new ApprovalTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovalTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApprovalTemplates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApprovalTemplates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ApprovalTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApprovalTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_TERMS: EnumField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_ACTIVE_WHEN_UPDATING_DOCUMENTS: EnumField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    APPROVAL_TEMPLATE_USERS: CollectionField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      ApprovalTemplateUser,
      true,
      true
    >;
    APPROVAL_TEMPLATE_STAGES: CollectionField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      ApprovalTemplateStage,
      true,
      true
    >;
    APPROVAL_TEMPLATE_DOCUMENTS: CollectionField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      ApprovalTemplateDocument,
      true,
      true
    >;
    APPROVAL_TEMPLATE_TERMS: CollectionField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      ApprovalTemplateTerm,
      true,
      true
    >;
    APPROVAL_TEMPLATE_QUERIES: CollectionField<
      ApprovalTemplates<DeSerializers>,
      DeSerializersT,
      ApprovalTemplateQuery,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvalRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_REQUESTS: OneToManyLink<
      ApprovalTemplates<DeSerializersT>,
      DeSerializersT,
      ApprovalRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApprovalTemplates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link useTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TERMS: fieldBuilder.buildEnumField('UseTerms', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isActiveWhenUpdatingDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE_WHEN_UPDATING_DOCUMENTS: fieldBuilder.buildEnumField(
          'IsActiveWhenUpdatingDocuments',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link approvalTemplateUsers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_TEMPLATE_USERS: fieldBuilder.buildCollectionField(
          'ApprovalTemplateUsers',
          ApprovalTemplateUser,
          true
        ),
        /**
         * Static representation of the {@link approvalTemplateStages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_TEMPLATE_STAGES: fieldBuilder.buildCollectionField(
          'ApprovalTemplateStages',
          ApprovalTemplateStage,
          true
        ),
        /**
         * Static representation of the {@link approvalTemplateDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_TEMPLATE_DOCUMENTS: fieldBuilder.buildCollectionField(
          'ApprovalTemplateDocuments',
          ApprovalTemplateDocument,
          true
        ),
        /**
         * Static representation of the {@link approvalTemplateTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_TEMPLATE_TERMS: fieldBuilder.buildCollectionField(
          'ApprovalTemplateTerms',
          ApprovalTemplateTerm,
          true
        ),
        /**
         * Static representation of the {@link approvalTemplateQueries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_TEMPLATE_QUERIES: fieldBuilder.buildCollectionField(
          'ApprovalTemplateQueries',
          ApprovalTemplateQuery,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalTemplates)
      };
    }

    return this._schema;
  }
}
