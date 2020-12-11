/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EmailGroupParams
 */
export interface EmailGroupParams {
  /**
   * Email Group Code.
   * @nullable
   */
  emailGroupCode?: string;
  /**
   * Email Group Name.
   * @nullable
   */
  emailGroupName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmailGroupParams.build]] instead.
 */
export function createEmailGroupParams(json: any): EmailGroupParams {
  return EmailGroupParams.build(json);
}

/**
 * EmailGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmailGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmailGroupParams> {
  /**
   * Representation of the [[EmailGroupParams.emailGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmailGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[EmailGroupParams.emailGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailGroupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmailGroupName', this, 'Edm.String');

  /**
   * Creates an instance of EmailGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmailGroupParams);
  }
}

export namespace EmailGroupParams {
  /**
   * Metadata information on all properties of the `EmailGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmailGroupParams>[] = [{
    originalName: 'EmailGroupCode',
    name: 'emailGroupCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'EmailGroupName',
    name: 'emailGroupName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmailGroupParams {
    return deserializeComplexTypeV4(json, EmailGroupParams);
  }
}
