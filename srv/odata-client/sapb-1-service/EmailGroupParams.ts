/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class EmailGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace EmailGroupParams {
  export function build(json: { [keys: string]: FieldType }): EmailGroupParams {
    return createComplexType(json, {
      EmailGroupCode: (emailGroupCode: string) => ({ emailGroupCode: edmToTs(emailGroupCode, 'Edm.String') }),
      EmailGroupName: (emailGroupName: string) => ({ emailGroupName: edmToTs(emailGroupName, 'Edm.String') })
    });
  }
}
